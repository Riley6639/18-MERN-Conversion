const { User } = require('../models/');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        //fetch logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
                    .populate('savedBooks')
                    .select('-__v');
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user || !(await user.isCorrectPassword(password))) {
                throw new AuthenticationError('Incorrect email or password!');
            }
            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, { bookId, authors, description, title, image, link }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: {
                            savedBooks: { bookId, authors, description, title, image, link }
                        }
                    },
                    { new: true, runValidators: true }
                );
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in to to save books')
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in to remove books')
        }
    },
};

module.exports = resolvers;