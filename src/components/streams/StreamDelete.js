import  React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        const {id} =this.props.match.params;
    return (
        <React.Fragment>
            <button onClick={()=> this.props.deleteStream(id)} class="ui negative button">Delete</button>
            <Link  to='/'  class="ui  button">Cancel</Link>
        </React.Fragment>
    );
    }

    renderContent(){
        if(!this.props.stream) {
            return 'Are you sure you want to Delete'
        }
        return `Are you sure you want to Delete the stream with title: ${this.props.stream.title}`
    }

    render(){
    return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                action = {this.renderActions()}
                onDismiss ={() => history.push('/')}
            />
    );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { stream : state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);