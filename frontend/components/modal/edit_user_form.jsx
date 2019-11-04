import React from 'react';
import Logo from '../servers/logo';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    let user = Object.assign({}, this.props.user);
    this.state = {
      user: user,
      isHovering: false,
    }
    this.MouseHover = this.MouseHover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  MouseHover() {
    this.setState(this.toggleHoverState);
  }

  update(field) {
    let user = this.state.user;
    return (e) => {
      user[field] = e.target.value;
      this.setState({ user });
    };
  }

  update2(field, color) {
    let user = this.state.user;
    return (e) => {
      user[field] = color;
      this.setState({ user });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state.user);
    this.props.closeModal();
  }


  render() {
    let colors = ["red", "yellow", "green", "grey", "purple"];
    let choices = colors.map(color => {
      return (
        <div key={color} className={`avatar-color-choices ${color}`}
          onClick={this.update2("avatar_color", color)}><Logo num="user" /></div>
      );
    });
    return (
      <div>
        <form className="edit-user-modal" onSubmit={this.handleSubmit}>
          <div className="user-modal-elements">
            <div className="edit-user-modal-heading">EDIT MY ACCOUNT</div>
            <div className={`edit-user-avatar ${this.state.user.avatar_color}`}
              onClick={this.MouseHover}>
              <Logo num="user" /></div>
            {this.state.isHovering && <div><div className="pick-a-color">Pick a color!</div><div className="color-list">{choices}</div></div>}
            <div className="user-avatar-color-str">Avatar color: {this.state.user.avatar_color}</div>
            <input className="invisible-color-input" type="text" value={this.state.user.avatar_color} onChange={this.update("avatar_color")} />
            <p className="edit-user-label username-label">USERNAME <span className="edit-user-aster">*</span></p>
            <input className="edit-user-input username-input" type="text" value={this.state.user.username} onChange={this.update("username")} />
            <p className="edit-user-label email-label">EMAIL <span className="edit-user-aster">*</span></p>
            <input className="edit-user-input email-input" type="text" value={this.state.user.email} onChange={this.update("email")} />
            <p className="edit-user-label password-label">PASSWORD <span className="edit-user-aster">*</span></p>
            <input className="edit-user-input password-input" type="password" placeholder="Disabled"/>

          </div>
          <div className="edit-user-buttons">
            <button type="button" className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
            <input className="edit-user-submit" type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}
export default EditUserForm;
