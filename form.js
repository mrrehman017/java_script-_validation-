$("#profile-form").validate({
	rules: {
		first_name: "required",
		last_name: "required",
		email: {
			required: true,
			email: true,
		},
		password: {
			required: true,
			minlength: 6
		},
		confrim_pass: {
			required: true,
			minlength: 6,
			equalTo: "#password"
		},
		phoneN: {
			required: true,
			maxlength: 13,
		},
		home_add: {
			required: true,
			maxlength: 4,
		},
		aboutme: {
			required: true,
			maxlength: 100,
		},
	},
	messages: {
		first_name: "Please Enter your First Name",

		last_name: "Please Enter your Last Name",

		email: {
			required: "Please enter your email",
			email: "Please enter valid email",
		},
		password: {
			required: "Please enter your password",
			minlength: "Your password must be at least 6 characters long",
		},
		confrim_pass: {
			required: "Please provide a password",
			minlength: "Your password must be at least 6 characters long",
			equalTo: "Please enter the same password as above",
		},
		phoneN: {
			required: "Please enter your Phone Number",
			maxlength: "Your password must be at least 13 number long",
		},
		home_add: {
			required: "Please enter your Address",
			maxlength: "Your address should be at least 4 characters long",
		},
		aboutme: {
			required: "Please leave a message.",
			maxlength: "Only 100 characters allow",
		},
	}
});  