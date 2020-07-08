import  React from 'react';
import StreamForm from './streamForm';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component{
    


    /*
    renderInput(formProps){
        return (
            <input
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />
        );
    }
    */
   //destruct
//    renderInput = ( {input, label, meta} ) => {
//     return (
//         <div className="field">
//             <label>{label}</label>
//             <input {...input} autoComplete="off" />
//             {this.renderError(meta)}
//         </div>
//         );
//     }
    
    onSubmit = (formValues)=> {
        this.props.createStream(formValues);
    }

    render() {
        return(
            // // we have to enter classname as error so that it so that semantic ui does not hide msg usig css
            // <form onSubmit= {this.props.handleSubmit(this.onSubmit)} className="ui form error">
            //     <Field name="title" component={this.renderInput} label="Enter Title"/>
            //     <Field name="description" component={this.renderInput} label= "Enter Description"/>
            //     <button className="ui button primary">Submit</button>
            // </form>
            <div>
                <h3>Create a Stream </h3>
                <StreamForm onSubmit = {this.onSubmit} />
            </div>
        );
    }
}

// const validate = formValues => {
//     const errors = {};

//     if (!formValues.title) {
//         errors.title = "You must enter title";
//     }
//     if(!formValues.description) {
//         errors.description = "you must enter a description";
//     }
//     return errors;
// }

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamCreate);

export default connect(null, { createStream })(StreamCreate);