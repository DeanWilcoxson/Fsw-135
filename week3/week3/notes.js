//notes.js


// collections (groups of similar resources), [book1, book2, book3, book4]
// resources (single thing) => document => json key:value , book1
// {}

// mongo scales horiz
// postgres scales vertically

// single source of truth

// ORM 
// users
// fields = name, email, password, admin: faalse
// 13.50   => 13.5000
// 12      => 12.0000
// 14.7    => 14.7000

// 8178901092938381
// 172-2871-203

// synchronous middleware than express handles that error automatically
// if an eror occurs 
// error handler pics it up adn thorws that erro

// async
// next(err)

// express (what we r used to) , mongoose err
// explictly create err
// const err = new Error()
//                             , err => {
//      if(err) return resizeBy.status(500).send(err)
//      return resizeBy.status(200).send(newthING)
// } 

// few different ways to add ORM / constraints to an applicatino
// database leevel constraints 
// [{},{
//      [{}, {
//           [{

//           }]
//      }]
// }]

// REST's N + 1 

// updating a field that doestn exist, err

// upsert
// when updatign something if that field or that document doesnt exist then create it



// app.get(book._id === ID, () => {}) 



// sessions vs tokens
//

// what is stateful?
// cookies, localStorage, token

// localStorage.setItem('logged-in', '1')

// where token is sent too and from
// token data can be sent from the client in the
// req.body
// req.header
// AND url query paramater 

// what makes up a token
// JWT
// 3 parts === header, payload, signature
// don't want sensitive information in any part of a token

// JWT != session handlers


























