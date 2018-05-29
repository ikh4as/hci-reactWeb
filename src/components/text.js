import React, { Component } from 'react';
import Note from '../Note/Note';
import NoteForm from '../NoteForm/NoteForm';
import { DB_CONFIG } from '../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './text.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class text extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
       <div className="bgtext">
    <Grid>
      <Jumbotron>
        <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Comment for me</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm className="note" addNote={this.addNote} />
        </div>
      </div>
    </Jumbotron>
  </Grid>
  <div className="credit">

      <div className="textCH">
      <div className="managercredit">
        <a  Style="font-family:Oswald; font-size:30px;" href="Home"target="_blank">BEEFLUV</a>
        <a  Style="font-family:Oswald; font-size:20px;"href="Gallery"target="_blank">Gallery</a>
        <a  Style="font-family:Oswald; font-size:20px;"href="Menu"target="_blank">Menu</a>
        <a  Style="font-family:Oswald; font-size:20px;"href="Promotion"target="_blank">Promotion</a>
        <a  Style="font-family:Oswald; font-size:20px;"href="About"target="_blank">About Us</a>
        <a  Style="font-family:Oswald; font-size:20px;"href="Contact"target="_blank">Contact Us</a>
      </div>
      <div className="managerimgcredit">
        <p Style="font-family:Oswald; font-size:30px;">&#10097;&#10097; FOLLOW ME!</p>
        <a href="https://www.facebook.com/boy.sopon.7"target="_blank"><img src="assets/facebook.png" /></a>
        <a href="https://www.instagram.com/boysopon/"target="_blank"><img src="assets/ins.png" /></a>
        <a href="https://www.youtube.com/channel/UCzUufSr_SR6VfP_W_EhVfIQ?view_as=subscriber"target="_blank"><img src="assets/youtube.png" /></a>    
      </div> 
  </div>
  </div>

   </div>
    )
  }
}


