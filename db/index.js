module.exports.Database = {
  constructor(props) {
    this.modal = props.modal;
  },

  createOne: (payload) => {
    try {
      return this.modal.insertOne(payload);
    } catch (error) {
      throw error;
    }
  },
  createMany: () => {},
};
