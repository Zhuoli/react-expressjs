import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileUploadProgress  from 'react-fileupload-progress';

class ListView extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const { listItems, previewItem } = this.props;
    return Object.keys(listItems).map((key) => {
      const item = listItems[key];
      return (
        <li
          key={item.name}
        >
          <button onClick={() => previewItem(item.name)}>{ item.name } + haha</button>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="list_items">
        <p> ni bu yao </p>
        <div>
        <h3>Default style</h3>
        <FileUploadProgress key='ex1' url='http://localhost:3000/api/upload'
          onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
          onLoad={ (e, request) => {console.log('load', e, request);}}
          onError={ (e, request) => {console.log('error', e, request);}}
          onAbort={ (e, request) => {console.log('abort', e, request);}}
          />
      </div>
        <ul>
          { this.renderList() } 
        </ul>
      </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.object.isRequired,
  previewItem: PropTypes.func.isRequired,
};

export default ListView;
