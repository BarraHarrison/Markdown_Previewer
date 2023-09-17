class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "# Welcome\n## Sub-header\n\n[Link](https://www.example.com)\n\n`inline code`\n\n```\ncode block\n```\n\n- List item\n\n> Blockquote\n\n![Image](https://via.placeholder.com/150)\n\n**Bold Text**"
    };
  }
  
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <div className="App">
        <textarea 
          id="editor" 
          value={this.state.markdown} 
          onChange={(e) => this.updateMarkdown(e.target.value)}
        />
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown, { breaks: true })}} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
