var Story = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Story</h1>
        <p>Dit verhaal gaat over de korte <HiddenWord>ei</HiddenWord> en de lange ij.</p>
        <p>Zo kan iemand leren of een woord met een lange ij, dan wel met een korte <HiddenWord>ei</HiddenWord> is.</p>
      </div>
    );
  }
});

React.render(<Story/>, document.getElementById("content"));
