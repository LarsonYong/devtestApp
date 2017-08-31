/**
 * Created by jack on 8/14/17.
 */
export class User {
    
        constructor(
            public username: string,
            public password: string,
            public skill: string,
            public project: string,
            public admin: boolean,
        ) { }
    
}
