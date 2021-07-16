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
var loadFile = function (event) {
	var pic = document.getElementById('pic');
	pic.src = URL.createObjectURL(event.target.files[0]);
	pic.onload = function () {
		URL.revokeObjectURL(pic.src) // free memory
	}
};

// Declearing html elements

const imgDiv = document.querySelector('.profile_pic');
// const img = document.querySelector('#pic');
// const file = document.querySelector('#file');
// const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div

imgDiv.addEventListener('mouseenter', function () {
	uploadBtn.style.display = "block"
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function () {
	uploadBtn.style.display = "none"
});

// // when we choose pic to upload

// file.addEventListener('change', function(){
// 	//this refer to file
// 	const choosedFile = this.file[0];

// 	if(choosedFile){

// 		const reader = new FileReader();
// 		// File reader is a predefined function of JS
// 		reader.addEventListener('load', function(){
// 			img.setAttribute('src', reader.result);
// 		});

// 		reader.readAsDataURL(choosedFile);
// 	}
// }); 