// ------- IMPORT DEPENDENCIES & MODEL ------- \\
const mongoose = require('../utils/connection')
const Goal = require('./goal')

// ------- SEED SCRIPT CODE ------- \\

const db = mongoose.connection

db.on('open', () => {

    const startGoals = [
        { subject: 'Reading', desc: 'STUDENT will increase reading accuracy and fluency to BLANK (grade/proficiency level).' },
        { subject: 'Writing', desc: 'STUDENT will increase writing skills to BLANK (grade/proficiency level) in the area of Sentence Fluency and Conventions.' },
        { subject: 'Math', desc: 'STUDENT will increase the ability to select and use units and tools of measurements to BLANK (grade/proficiency level)' },
        { subject: 'Behavior', desc: 'STUDENT will decrease the duration of non-compliance by BLANK %, while increasing his ability to accept an adult prompt to utilize a coping skill when demonstrating signs of dysregulation to BLANK %.' },
        { subject: 'Speech and Language', desc: 'STUDENT will increase awareness of speech production by describing characteristics of fluent and dysfluent speech with BLANK % accuracy during a BLANK minute language sample.' }
    ]

    // const startObjectives = [
    //     {subject: 'Reading', desc: 'read a book'},
    //     {subject: 'Writing', desc: 'write a letter'},
    //     {subject: 'Math', desc: 'add some numbers'},
    //     {subject: 'Behavior', desc: 'be a good person'},
    //     {subject: 'Speech and Language', desc: 'talk'}
    // ]

    Goal.deleteMany({ owner: null })
        .then(() => {

            Goal.create(startGoals)
                .then(data => {
                    console.log('These are the IEP goals: \n', data)
                    db.close()
                })
                .catch(err => {
                    console.log('Something is not right \n', err)
                    db.close()
                })
        })

        .catch(err => {
            console.log('Something is not right \n', err)
            db.close()
        })
})