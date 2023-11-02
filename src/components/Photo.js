import React from 'react';

class Photo extends React.Component {
render() {
return (
<div className="photo">
<img src={this.props.photo.urls.small} alt={this.props.photo.description} />
<p>{this.props.photo.description}</p>
</div>
);
}
}

export default Photo;