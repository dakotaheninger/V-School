var reverse = document.getElementById("reverse");

var facebookPageOwner = {
    name: "Dakota",
    age: 24,
    favoriteHobbies: [
        {
            hobbieName: "Sports",
            timeSpentPerDay: "1 Hour"

},
        {
            hobbieName: "Video Games",
            timeSpentPerDay: "2 Hours"
        }
    ],
    facebookFriends: [
        {
            friendName: "Raeni",
            age: 21,
            favoriteHobbies: [
                {
                    hobbieName: "Sleeping",
                    timeSpentPerDay: "16 Hours"
                },
                {
                    hobbieName: "Watching Tv",
                    timeSpentPerDay: "3 Hours"
                }
            ],
            facebookFriends: [
                {
                    friendName: "Karissa",
                    age: 22,
                    favoriteHobbies: [
                        {
                            hobbieName: "Being Annoying",
                            timeSpentPerDay: "24 Hours"
                        },
                        {
                            hobbieName: "Pulling the Goalie",
                            timeSpentPerDay: "24 Hours"
                        }
                    ]
                        },
                {
                    friendName: "Ashley",
                    age: 23,
                    favoriteHobbies: [
                        {
                            hobbieName: "None",
                            timeSpentPerDay: "24 hours"
                            }
                        ]
                    }

                    ]
                }
            ],
    reversingTheNames: function () {
        var splitName = facebookPageOwner.facebookFriends[0].facebookFriends[1].friendName.split("");
        
        var reverseName = splitName.reverse();
        
        var joinName = reverseName.join("");
        
        var newName = joinName;
        
        return newName;


    }
}
reverse.innerHTML = facebookPageOwner.reversingTheNames();


