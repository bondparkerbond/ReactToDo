var Item = React.createClass({
  render: function() {
    var id = "Item-" + this.props.id;
    return( <li>
              <div className='row'>
                <div className='col s10'>
                  {this.props.name}
                </div>
                <div className='col s2'>
                  <input type='checkbox' id={id} checked={this.props.complete} />
                  <label htmlFor={id}>Complete?</label>
                </div>
              </div>
            </li>);
  }
});