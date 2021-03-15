import React, { useState } from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
    };
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    };
    render() {
        return (
            <p>
                <span>Status: </span>
                {!this.state.editMode && (
                    <span onDoubleClick={this.toggleEditMode}>
                        {this.props.status}
                    </span>
                )}
                {this.state.editMode && (
                    <input
                        autoFocus={true}
                        onBlur={this.toggleEditMode}
                        value={this.props.status}
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
