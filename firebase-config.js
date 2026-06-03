// ============================================================
// REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CONFIG
// Instructions in README.md
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyA6AoDztY4fZK5KR9d_yhoIYyZC6jKK2KM",
  authDomain: "horof-77015.firebaseapp.com",
  databaseURL: "https://horof-77015-default-rtdb.firebaseio.com",
  projectId: "horof-77015",
  storageBucket: "horof-77015.firebasestorage.app",
  messagingSenderId: "980006093778",
  appId: "1:980006093778:web:62f368be380788b28e7e0b"
};

// ============================================================
// PASTE THESE RULES INTO:
// Firebase Console → Realtime Database → Rules
// ============================================================
/*
{
  "rules": {
    "rooms": {
      "$roomCode": {

        // Anyone can read the room
        ".read": true,

        // Only allow room creation if it doesn't exist yet
        ".write": "!data.exists()",

        "judge": {
          // Can only be written once (at room creation), never changed
          ".write": "!data.exists()"
        },

        "judgeToken": {
          // Secret token — only writable at creation, never overwritten
          ".write": "!data.exists()"
        },

        "status": {
          // Only the judge (verified by token) can change game status
          ".write": "newData.parent().child('judgeToken').val() === newData.parent().parent().parent().child('rooms/' + $roomCode + '/judgeToken').val() || !data.exists()"
        },

        "teams": {
          "$team": {
            "players": {
              "$playerId": {
                // Players can only write their own entry
                ".write": true
              }
            },
            "score": {
              // Score is managed server-side via full room writes
              ".write": true
            }
          }
        },

        "letters": {
          "$letterKey": {
            ".write": true
          }
        },

        "question":        { ".write": true },
        "pendingQuestion": { ".write": true },

        "round": {
          ".write": true,
          "buzzedBy": {
            // Can only be set once per round (first buzz wins)
            ".write": "!data.exists() || newData.val() === null"
          }
        }
      }
    }
  }
}
*/
