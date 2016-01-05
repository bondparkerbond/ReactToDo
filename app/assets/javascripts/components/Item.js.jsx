var Item = React.createClass({
  checkItem: function() {
    $.ajax({
      url: '/check_item',
      type: 'PUT',
      data: { item: { complete: !this.props.complete }, id: this.props.id }
    });
  },

  render: function() {
    var id = "item-" + this.props.id;
    return( <li>
              <div className='row'>
                <div className='col s10'>
                  {this.props.name}
                </div>
                <div onClick={this.checkItem} className='col s2'>
                  <input type='checkbox' id={id} checked={this.props.complete} />
                  <label htmlFor={id}>Complete?</label>
                </div>
              </div>
            </li>);
  }
});