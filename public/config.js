// eslint-disable-next-line no-unused-vars

const EventController = {
  listEvent: {},
  set: ({ name, handle }) => {
    EventController.listEvent[name] = handle;
  },
  call: ({ name, params }) => {
    EventController.listEvent[name]();
    // if (!params) {
    //   EventController.listEvent[name]();
    // } else {
    //   return EventController.listEvent[name](params);
    // }
  },
};
