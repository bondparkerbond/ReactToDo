var List = React.createClass({
  getInitialState: function() {
    return { items: this.props.items }
  },

  getDefaultState: function() {
    return { items: [] }
  },
  
  render: function() {
    return( <div>
              <h1> My First Component </h1>
            </div> );
  }
});