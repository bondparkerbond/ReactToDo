var Item = React.createClass({
  render: function() {
    var id = "item-" + this.props.id;
    return( <li>
              <div className='row'>
                <div classname='col s10'>
                  {this.props.name}
                </div>
                <div className='col s2'>
                  <input type='checkbox' id={id} checked={this.props.complete} />
                  <label for={id}>Complete?</label>
                </div>
              </div>
            </li>);
  }
});