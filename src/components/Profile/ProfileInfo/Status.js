import React, { useState } from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };
    render() {
        return (
            <p>
                <span>Status: </span>
                {!this.state.editMode && (
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || '---'}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                )}
            </p>
        );
    }
}

export default Status;

// import { useState } from 'react';

// const Status = (props) => {
//     const [editMode, setEditMode] = useState(false);
//     return (
//         <p>
//             <span>Status: </span>
//             {!editMode && (
//                 <span onDoubleClick={() => setEditMode(true)}>
//                     {props.status}
//                 </span>
//             )}
//             {editMode && (
//                 <input
//                     autoFocus={true}
//                     onBlur={() => setEditMode(false)}
//                     value={props.status}
//                 />
//             )}
//         </p>
//     );
// };

// export default Status;
