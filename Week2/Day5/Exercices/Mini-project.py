# here we save every moves of the players
moves = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

# this function display the gameboard
def display_board(positions = []):
    # we initalise all the lines that will be modified and used with "print" function
    line_msg = "TIC TAC TOE!"
    line_deco = "****1***2***3****"
    line_grid = "*  ---|---|---  *"
    line_row1 = "1     |   |     1"
    line_row2 = "2     |   |     2"
    line_row3 = "3     |   |     3"

    # we display the first message dynamically if no parameters were input in the function
    if positions == []:
        line_msg = "Welcome to " + line_msg
    # here we change every lines that will be displayed by parsing every rows and columns from the users moves
    else:
        for row in range(len(moves)):
            for column in range(len(moves[row])):
                match row:
                    # in (column+1)*4, we multiply by 4 to center in cases every inputs of the players moves
                    case 0:
                        # we update the line by adding the moves
                        line_row1 = line_row1[:((column+1)*4)] + moves[row][column] + line_row1[((column+1)*4) + 1:]
                    case 1:
                        # we update the line by adding the moves
                        line_row2 = line_row2[:((column+1)*4)] + moves[row][column] + line_row2[((column+1)*4) + 1:]
                    case 2:
                        # we update the line by adding the moves
                        line_row3 = line_row3[:((column+1)*4)] + moves[row][column] + line_row3[((column+1)*4) + 1:]

    # we print every lines
    print(f"\n{line_msg}")
    print(line_deco)
    print(line_row1)
    print(line_grid)
    print(line_row2)
    print(line_grid)
    print(line_row3)
    print(line_deco)

# this function ask the players the moves and saves them in the moves list
def player_input(player):
    row = int(input("Enter row\n")) - 1
    column = int(input("Enter column\n")) - 1
    # check if the case that the playerwant use is not already taken
    if moves[row][column] != " ":
        print("This case is already taken, please play another move")
        player_input(player)
    else:
        # save the move
        moves[row][column] = player

# this function check every winning conditions and return false if found one
# it return true by default
# this function is used in the loop condition of the game  
def check_win(player):
    win_condition = [player, player, player]
    global winner
    # check the rows
    for row in moves:
        if row == win_condition:
            winner = player
            return False
    
    # check the columns
    for i in range(len(moves)):
        column_check = []
        for j in range(len(moves[i])):
            column_check.append(moves[j][i])
        if column_check == win_condition:
            winner = player
            return False
    
    # check the diagonals
    diagonal1_check = []
    diagonal2_check = []
    for i in range(3):
        diagonal1_check.append(moves[i][i])
        diagonal2_check.append(moves[-(i+1)][i])
    if diagonal1_check == win_condition or diagonal2_check == win_condition:
        winner = player
        return False
    return True

# the game logic, here we call every functions
def game():
    display_board()
    turn = 0
    player = "X"
    while check_win(player):
        # here we manage the turns of the players
        if turn % 2 == 0:
            player = "X"
        else:
            player = "O"
        print(f"\nPlayer {player}'s turn...\n")
        player_input(player)
        display_board(moves)
        # we increment the turn for the next turn
        turn += 1
    print(f"\nGame Over.\nAaaaaaand the winner is....\nThe {winner} player!!!\n\n********************\n*CONGRATULATIONS!!!*\n********************")

game()
