const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://sovyorwqyovqyldnpmpd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvdnlvcndxeW92cXlsZG5wbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NDE1OTQsImV4cCI6MjAxOTQxNzU5NH0.NQ2gJgUAUL_PD6eSjcxSHtU1KqQh1OwMLkG_XnlJte4'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

app.use(cors());
app.use(bodyParser.json());

// LOGIN PAGE
app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const {User, error} = await supabase.auth.signIn({
        user_email: email,
        user_password: password
    });

    if(error) {
        res.status(401).json({ error: error.message });
    } else {
        res.status(200).json({ message: 'Login in successfully.', User})
    }
})


//SIGN UP PAGE
app.post('/addUser', async (req, res) => {
    const { role, username, email, password } = req.body;
    const { data, error } = await supabase
        .from('User')
        .insert([
            { role_id: role, user_name: username,user_email: email, user_password: password },
        ]);
    if (error) {
        console.error('Error inserting user:', error);
        res.status(500).send("Error inserting user.");
    } else {
        console.log('User inserted:', data);
        res.send(data);
    }
});

//Add feedback
app.post('/addFeedback', async(req ,res) => {
    const { feedback } = req.body;
    const { data, error } = await supabase
    .from('Feedback')
    .insert([{ feedback_desc: feedback },]);
    if (error) {
        console.error('Error submitting feedback: ', error);
        res.status(500).send("Error submitting feedback.")
    } else {
        console.log('Feedback submitted: ', data);
        res.send(data);
    }
});

//Edit User Profile
app.post('/EditUserProfile', async(req ,res) => {
    const { feedback } = req.body;
    const { data, error } = await supabase
    .from('Feedback')
    .insert([{ feedback_desc: feedback },]);
    if (error) {
        console.error('Error submitting feedback: ', error);
        res.status(500).send("Error submitting feedback.")
    } else {
        console.log('Feedback submitted: ', data);
        res.send(data);
    }
});

app.get('/getData', async (req, res) => {
    const {data,error} = await supabase
    .from('User')
    .select('*')
    if (error){
        console.error('Error fetching users:' , error)
        res.status(500).send("Error fetching users.")
    } else {
        console.log('Users: ', data)
        res.send(data)
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})