import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import validator from "validator";

class AddUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isDeleteUserDialogOpen: false,
      isUserFormDialogOpen: false,
      indexToDeleteOrUpdate: "",
      act: 0    
    };
    this.userFormSubmit = this.userFormSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }


  handleOpenCreateUserDialog = () => {
    this.setState({ isUserFormDialogOpen: true });
  };

  handleCloseCreateUserDialog = () => {
    this.setState({ isUserFormDialogOpen: false, act:0 });
  };

  userFormSubmit(event) {
    event.preventDefault();
    const act = this.state.act;
    const form = event.target;
    const id = form.elements["id"].value;
    const name = form.elements["name"].value;
    const age = form.elements["age"].value;
    const profession = form.elements["profession"].value;
    if (
      validator.trim(id) === "" ||
      validator.trim(name) === "" ||
      validator.trim(age) === "" ||
      validator.trim(profession) === ""
    ) {
      alert("Please fill the Required Fields");
    } 
    else {
      if (act === 0) {
        let users = this.state.users;
        let data = { id, name, age, profession };
        users.push(data);
        this.setState({ users: users, isUserFormDialogOpen: false });
      }
      if (act === 1) {
        let index = this.state.indexToDeleteOrUpdate;
        let users = this.state.users;
        const form = event.target;
        users[index].id = form.elements["id"].value;
        users[index].name = form.elements["name"].value;
        users[index].age = form.elements["age"].value;
        users[index].profession = form.elements["profession"].value;
        this.handleCloseCreateUserDialog();
      }
    }
  }

  renderCreateUserForm = () => {
    const act = this.state.act;
    let id = "";
    let title = "";
    let buttonText= "";
    let name= "";
    let age="";
    let profession="";
    let disabled=false;
    if (act === 0) {
      title = "Create User";
      buttonText="Create";
    }
    if (act === 1) {
      title = "Update User";
      buttonText="Update";
      const index = this.state.indexToDeleteOrUpdate;
      let users = this.state.users[index];
      disabled=true;
      id = users.id;
      name= users.name;
      age= users.age;
      profession=users.profession;
    }

    return (
      <Dialog
        open={this.state.isUserFormDialogOpen}
        onClose={this.handleCloseCreateUserDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <form onSubmit={this.userFormSubmit} noValidate autoComplete="off">
          <DialogContent>
            <DialogContentText>Enter User Details</DialogContentText>

            <div className="textFieldContainer">
              <div>
                  <TextField id="id" label="Employee Code" variant="outlined" defaultValue={id} disabled={disabled} required />
              </div>
              <div>
                <TextField id="name" label="Name" variant="outlined" defaultValue={ name } required />
              </div>

              <div>
                <TextField id="age" label="Age" variant="outlined" type="number" defaultValue={ age } required />
              </div>

              <div>
                <TextField id="profession" label="Profession" variant="outlined" defaultValue={ profession } required />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseCreateUserDialog} color="primary" variant="outlined" >
              Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
              { buttonText }
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };


  renderTableHead = () => {
    return (
      <TableHead>
        <TableRow className="head">
          <TableCell>Sr. No.</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Profession</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  renderTableBody = () => {
    
    return (
      <TableBody>
        
        {this.state.users.map((user, index) => {
          
          return (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row"> {index + 1} </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.profession}</TableCell>
              <TableCell>
                <Button color="primary" variant="outlined" onClick={this.handleOpenUpdateUserDialog.bind(this, index)} >
                  Update
                </Button> {" "}
                <Button color="secondary" variant="outlined" onClick={this.handleOpenDeleteUserDialog.bind(this, index)} >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

  

  handleOpenUpdateUserDialog = (index, event) => {
    this.setState({
      isUserFormDialogOpen: true,
      indexToDeleteOrUpdate: index,
      act: 1
    });
  };



  handleOpenDeleteUserDialog = (index, event) => {
    this.setState({
      isDeleteUserDialogOpen: true,
      indexToDeleteOrUpdate: index
    });
  };

  handleCloseDeleteUserDialog = () => {
    this.setState({ isDeleteUserDialogOpen: false });
  };

  renderDeleteUserDialog = (index) => {
    return (
      <Dialog open={this.state.isDeleteUserDialogOpen} onClose={this.isDeleteUserDialogOpen} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseDeleteUserDialog} color="primary" variant="outlined"  >
            Cancel
          </Button>
          <Button color="primary" type="submit" variant="contained" onClick={this.deleteUser.bind(this, index)} >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  deleteUser = (index) => {
    let users = this.state.users;
    users.splice(index, 1);
    this.setState({ users: users });
    this.handleCloseDeleteUserDialog();
  };

  

  render() {
    const { isUserFormDialogOpen } = this.state;
    const { isDeleteUserDialogOpen } = this.state;
    const { indexToDeleteOrUpdate } = this.state;
    const { isUpdateUserDialogOpen } = this.state;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleOpenCreateUserDialog} > Add User </Button>
        {isUserFormDialogOpen && this.renderCreateUserForm()}
        <br /> <br />
        <Table className="UserTable">
          {this.renderTableHead()}
          {this.renderTableBody()}
        </Table>
        {isDeleteUserDialogOpen && this.renderDeleteUserDialog(indexToDeleteOrUpdate)}
        {isUpdateUserDialogOpen && this.renderCreateUserForm(indexToDeleteOrUpdate)}
      </div>
    );
  }
}
export default AddUsers;
