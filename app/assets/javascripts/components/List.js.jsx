var List = React.createClass({
  
  getInitialState: function() {
    return { items: [] };
  },

  componentDidMount: function() {
    this.refreshList();
  },

  refreshList: function() {
    var self = this;
    $.ajax({
      url: '/items',
      data: {list_id: this.props.id},
      type: 'GET',
      success: function(data) {
        self.setState({ items: data.items });
      }
    });
  },

  showAddForm: function() {
    this.setState({showAdd: !this.state.showAdd});
  },

  addItemName: function(e) {
    this.setState({itemName: e.currentTarget.value});
  },

  submitItem: function(e) {
    e.preventDefault();
    var self = this;
    $.ajax({
      url: '/items',
      type: 'POST',
      data: {list_id: this.props.id, item: { name: this.state.itemName } },
      success: function(data) {
        var items = self.state.items;
        items.push(data);
        self.setState({items: items, showAdd: false, itemName: null});
      }
    });
  },

  addItemForm: function() {
    if(this.state.showAdd){
      return( <div>
                <form onSubmit={this.submitItem}>
                  <div className='input-field'>
                    <input autoFocus='true' placeholder='Item Name' type='text' onChange={this.addItemName} />
                    <button className='btn waves-effect' type='submit'>submit</button>
                  </div>
                </form>
              </div>);
    }
  },

  displayItems: function() {
    var items = [];
    for(var i = 0; i < this.state.items.length; i++){
      var item = this.state.items[i];
      var key = "Item-" + item.id;
      items.push(<Item id={item.id} listId={this.props.id} key={key} url={item.url} refreshList={this.refreshList} name={item.name} complete={item.complete} />);
    }
    return items;
  },

  render: function() {
    return( <div className='container'>
              <a className='waves-effect waves-light btn' onClick={this.showAddForm}>Add Item</a>
              {this.addItemForm()}
              <div className='card blue-grey darken-1'>
                <div className='card-content white-text'>
                  <span className='card-title'>{this.props.name}</span>
                  <ul>
                    {this.displayItems()}
                  </ul>
                </div>
              </div>
            </div> );
  }
});