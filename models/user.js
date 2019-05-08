const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const userSchema = new Schema({
  name: { type: String, unique: false },
	email: { type: String, unique: false, required: false },
	username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false },
	group: { type: String },
	phone: Number,
  address: String,
  picture: String,
	rating: Number,
	description: String,
  paid: { type: Boolean, default: false },
  adSpace: [{
    type: Schema.Types.ObjectId,
    ref: "AdSpace"
	}],
	favorites: [{
    type: Schema.Types.ObjectId,
    ref: "AdSpace"
  }],
  used: [{
    type: Schema.Types.ObjectId,
    ref: "AdSpace"
	}],
	dateAdded: {
		type: Date,
		default: Date.now()
	}
});

userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

userSchema.pre('save', function (next) {
	if (!this.password) {
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model("User", userSchema);

module.exports = User;
