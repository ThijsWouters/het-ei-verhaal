var HiddenWord = React.createClass({
  getInitialState: function () {
    return {
      hidden: true
    };
  },
  toggleHidden: function (event) {
    this.setState({hidden: !this.state.hidden});
  },
  render: function () {
    var hiddenClass = this.state.hidden ? "not-shown" : "shown";

    return (
      <span onClick={this.toggleHidden} className={hiddenClass}>{this.props.children}</span>
    );
  }
});
