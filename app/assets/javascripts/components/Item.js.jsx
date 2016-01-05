var Item = React.createClass({
  checkItem: function() {
    var self = this;
    $.ajax({
      url: '/check_item',
      type: 'PUT',
      data: { item: { complete: !this.props.complete }, id: this.props.id },
      success: function() {
        self.props.refreshList();
      }
    });
  },

  render: function() {
    var id = "item-" + this.props.id;
    var checked = this.props.complete ? 'checked' : '';
    var itemClass = 'col s10 ' + checked;
    return( <li>
              <div className='row'>
                <div className={itemClass}>
                  {this.props.name}
                </div>
                <div onClick={this.checkItem} className='col s2'>
                  <input type='checkbox' id={id} defaultChecked={this.props.complete} />
                  <label htmlFor={id}>Complete?</label>
                </div>
              </div>
            </li>);
  }
});