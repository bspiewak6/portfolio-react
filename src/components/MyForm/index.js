import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mjvpzpza"
                method="POST"
            >

                <div>
                    <label htmlFor="name" className="name-form">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email" className="email-form">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message" className="message-form">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                {status === "SUCCESS"
                    ? <p>Thank you for your note, I'll get back to you shortly!</p>
                    : <div className="pt-3">
                        <button type="submit">Submit</button>
                    </div>
                }
                {status === "ERROR" && <p>There was an error, please try again!</p>}
        
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}