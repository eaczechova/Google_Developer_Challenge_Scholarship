/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Ewa",
    friends: 311,
    messages: ["Like it", "Checked-in Paris", "Working remotedly, yupii!"],
    postMessage: function postMessage(message){
        facebookProfile.messages.push(message);},
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index,1)
    },
    addFriend: function addFriend() {
        facebookProfile.friends++;
    },
    removeFriend: function removeFriend() {
         facebookProfile.friends--;
    }

};
facebookProfile.deleteMessage(0);
 console.log(facebookProfile.messages);
