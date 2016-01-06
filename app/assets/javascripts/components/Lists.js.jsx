var Lists = React.createClass({

  getInitialState: function() {
    return {lists: []}
  },

  componentDidMount: function() {
    this.fetchLists();
  },

  fetchLists: function() {
    var self = this;
    $.ajax({
      url: '/lists',
      type: 'GET',
      data: {id: this.props.boardId},
      success: function(data) {
        self.setState({lists: data});
      }
    });
  },

  showAddForm: function() {
    this.setState({showAdd: !this.state.showAdd});
  },

  submitList: function(e) {
    e.preventDefault();
    var self = this;
    $.ajax({
      url: '/lists',
      type: 'POST',
      data: {list: {name: this.refs.listName.value}}
      success: function(data) {
        var lists = self.state.lists;
        lists.push(<List />);
        self.setState({lists: lists});
      }
    });
  },

  addListForm: function() {
    if(this.state.showAdd) {
      return( <div>
                <form onSubmit={this.submitList}>
                  <div className='input-field'>
                    <input type='text' placeholder='List Name' autoFocus='true' ref='listName' />
                    <button type='submit' className='btn waves-effect waves-light'>Add</button>
                  </div>
                </form>
              </div>);
    }
  },

  render: function() {
    return( <div>
              <a className='waves-effect waves-light btn' onClick={}>Boards</a>
              <a className='btn waves-effect waves-light' onClick={this.showAddForm}>Add List</a>
              {this.addListForm()}
              <div className='row'>
                {this.displayLists()}
              </div>
            </div>);
  }

});