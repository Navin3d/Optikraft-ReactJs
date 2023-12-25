const ContactPage = () => {
    return (
        <div>
            <h1>Contact Form</h1>

            <div class="container">
                <form>
                    <label for="fname"><strong>First Name</strong></label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">INDIA</option>
                        <option value="canada">AUSTRALIA</option>
                        <option value="usa">USA</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ContactPage;