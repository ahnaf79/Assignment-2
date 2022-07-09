/* File name: contactList.js
Student name: Ahnaf Tahmid
StudentID: 301221126
Date: 1st July 2022 */

// create a reference to the model
let contacts = require('../models/contacts');

// Gets all contacts from the Database and renders the page to list them all.
module.exports.displayContactList = function(req, res, next) {


    contacts.find((err, contacts) => {

        if (err) {
            return console.error(err);
        } else {
            res.render('businesscontact/list', {
                title: 'Business Contact',
                contactList: contacts,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


// // Gets a car by id and renders the details page.
// module.exports.details = (req, res, next) => {

//     let id = req.params.id;

//     CarModel.findById(id, (err, carToShow) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             //show the edit view
//             res.render('businesscontact/edit', {
//                 title: 'Edit a contact',
//                 contact: contactEdit,
//             })
//         }
//     });
// }

// Renders the Add form using the add_edit.ejs template
//  

// Gets the edit page
module.exports.displayEditPage = (req, res, next) => {

    let id = req.params.id;
    console.log("edit id: " + id);

    contacts.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the contact view
            res.render('businesscontact/edit', {
                title: 'Edit this contact',
                contact: contactToEdit,
                displayName: req.user ? req.user.displayName : "",
            });
        }
    });

}

// Processes the data submitted from the Edit form to update 
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;


    contacts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Contact id: ${id} not found`,
                });
            } else {
                res.redirect('../views/businesscontact');
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error! Please try again" });
        });
};

// Deletes a car based on its id.
module.exports.performDelete = (req, res, next) => {
    console.log(req.params.id);

    contacts.deleteOne({ id: req.params.id }, function(err) {
        if (err) {
            console.log(err)
        } else {

            console.log("Successful deletion");
            res.redirect('../views/businesscontact');
        }


    });


}