let api = "https://api.becoditive.xyz/"
let verison = "v2/"
let fetch = require('node-fetch')

let nokey = {
    message : "No API Key was provided!",
    code : 401
}

class API {
    constructor(){
        this.apikey = null
    }

    login(apikey){
        this.apikey = apikey 
    }

    async cat() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}animals/cat?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async dog() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}animals/dog?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async panda() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}animals/panda?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async bird() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}animals/bird?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async uuid() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/uuid?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async joke() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/joke?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async puns() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/puns?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async hug() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/hug?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async kiss() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/kiss?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async insults() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/insults?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async flirt() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/flirt?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async word() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/word?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async doesnotexists() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/doesnotexists?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async quote() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/quote?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async uselessweb() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/uselessweb?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async truth() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/truth?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async dare() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/dare?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async number() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/number?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }

    async password() {
        if(this.apikey === null) return nokey
        let data = await fetch(`${api}${verison}others/password?apikey=${this.apikey}`)
        .then(res => res.json())
        .then(json => {
            return json
        })

        return data
    }
}

module.exports = {
    API : API
}