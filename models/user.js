const mongoose = require('mongoose');
 const   Schema = mongoose.Schema;
 const   bcrypt = require('bcrypt');
 const   SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
    const user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});
//  compre password//
UserSchema.methods.comparePassword = function comparePassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }



module.exports = mongoose.model("User", UserSchema);

 
