var Boards = React.createClass({

  getInitialState: function() {
    return {boards: this.props.boards}
  },

  getDefaultState: function() {
    return {boards: []}
  },

  addBoard: function(e) {
    e.preventDefault();
    var self = this;

    $.ajax({
      url: '/boards',
      type: 'POST',
      data: {board: {name: this.refs.boardName.value}},
      success: function(data) {
        var boards = self.state.boards;
        boards.push(data);
        self.refs.boardName.value = '';
        self.setState({boards: boards});
      }
    });
  },

  deleteBoard: function(id) {
    var self = this;
    $.ajax({
      url: '/boards/' + id,
      type: 'DELETE',
      success: function(data) {
        self.setState({boards: data});
      }
    });
  },

  displayBoards: function() {
    if(this.state.boards.length) {
      var boards = [];
      for(var i = 0; i < this.state.boards.length; i++){
        var board = this.state.boards[i];
        var key = 'board-' + board.id;
        boards.push(<Board key={key} id={board.id} name={board.name} deleteBoard={this.deleteBoard} />);
      }
    } else {
      return(<h3>No boards found, please add one!</h3>);
    }
    return boards;
  },

  render: function() {
    return( <div>
              <form onSubmit={this.addBoard}>
                <div className='input-field'>
                  <input required='true' type='text' autoFocus='true' placeholder='Board Name' ref='boardName' />
                  <button type='submit' className='btn waves-effect'>Add</button>
                </div>
              </form>
              <div className='row'>
                {this.displayBoards()}
              </div>
            </div>);
  }

});