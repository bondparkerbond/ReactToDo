var Lists = React.createClass({

  getInitialState: function() {
    return {lists: []}
  },

  componentDidMount: function() {
    this.fetchLists();
  },

  render: function() {
    return(<h1>Lists Placeholder</h1>);
  }

});