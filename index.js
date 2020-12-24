/*!
 * login-utility
 * Copyright(c) 2020 Kasu Venkata Ramireddy <ram.kasu@gmail.com>
 * MIT Licensed
 */

'use strict'


/**
 * Private variables
 */


 class LoginActivity{

	constructor(request){
		this.request=request
	}


	async getIP(){
		return await this.request.headers['cf-connecting-ip'] || this.request.headers['x-forwarded-for'] || this.request.connection.remoteAddress
	}

}

module.exports = LoginActivity


