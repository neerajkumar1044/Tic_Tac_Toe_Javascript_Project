        let a = -1
        let b = -1
        let c = -1
        let d = -1
        let e = -1
        let f = -1
        let g = -1
        let h = -1
        let i = -1
        first = true
        let matrix = [[5, 5, 5], [5, 5, 5], [5, 5, 5]]
        function clear_grid(){
            document.getElementById('a1').innerText = ""
            document.getElementById('a2').innerText = ""
            document.getElementById('a3').innerText = ""
            document.getElementById('b1').innerText = ""
            document.getElementById('b2').innerText = ""
            document.getElementById('b3').innerText = ""
            document.getElementById('c1').innerText = ""
            document.getElementById('c2').innerText = ""
            document.getElementById('c3').innerText = ""
            document.getElementById('c3').innerText = ""
            document.getElementById('declaration').innerText = ""
            
        }
        function declare(player){
            const winner_player = document.getElementById('declaration')
            if(player === 0){
                winner_player.innerText = "You Lost"
            }
            else{
                winner_player.innerText = "You Won"
            }
        }
        //
        function winner(num, player){
            if(num === 2){
                if(matrix[0][1]+matrix[1][1]+matrix[2][1] === player){
                    return true
                }
                else if(matrix[0][0]+matrix[0][1]+matrix[0][2] === player){
                    return true
                }
                else return false
            }
            else if(num === 6){
                if(matrix[0][2]+matrix[1][2]+matrix[2][2] === player){
                    return true
                }
                else if(matrix[1][0]+matrix[1][1]+matrix[1][2] === player){
                    return true
                }
                else return false
            }
            else if(num === 8){
                if(matrix[0][1]+matrix[1][1]+matrix[2][1] === player){
                    return true
                }
                else if(matrix[2][0]+matrix[2][1]+matrix[2][2] === player){
                    return true
                }
                else return false
            }
            else if(num === 4){
                if(matrix[0][0]+matrix[1][0]+matrix[2][0] === player){
                    return true
                }
                else if(matrix[1][0]+matrix[1][1]+matrix[1][2] === player){
                    return true
                }
                else return false
            }
            else if(num == 1) {
                if(matrix[0][0]+matrix[1][1]+matrix[2][2] === player){
                    return true
                }
                else if(matrix[0][0]+matrix[0][1]+matrix[0][2] === player){
                    return true
                }
                else if(matrix[0][0]+matrix[1][1]+matrix[2][2] === player){
                    return true
                }
                else return false
                
            }
            else if(num == 9) {
                if(matrix[0][0]+matrix[1][1]+matrix[2][2] === player){
                    return true
                }
                else if(matrix[0][2]+matrix[1][2]+matrix[2][2] === player){
                    return true
                }
                else if(matrix[2][0]+matrix[2][1]+matrix[2][2] === player){
                    return true
                }
                else return false
            }
            else if(num == 3) {
                if(matrix[0][0]+matrix[0][1]+matrix[0][2] === player){
                    return true
                }
                else if(matrix[0][2]+matrix[1][1]+matrix[2][0] === player){
                    return true
                }
                else if(matrix[0][2]+matrix[1][2]+matrix[2][2] === player){
                    return true
                }
                else return false
            }
            else if(num == 7) {
                if(matrix[0][0]+matrix[0][1]+matrix[0][2] === player){
                    return true
                }
                else if(matrix[0][0]+matrix[1][0]+matrix[2][0] === player){
                    return true
                }
                else if(matrix[2][0]+matrix[2][1]+matrix[2][2] === player){
                    return true
                }
                else return false
            }
            else if(num == 5) {
                if(matrix[0][0]+matrix[1][1]+matrix[2][2] === player){
                    return true
                }
                else if(matrix[0][2]+matrix[1][1]+matrix[2][0] === player){
                    return true
                }
                else if(matrix[0][1]+matrix[1][1]+matrix[2][1] === player){
                    return true
                }
                else if(matrix[1][0]+matrix[1][1]+matrix[1][2] === player){
                    return true
                }
                else return false
                
            }

        }
        // 
        function nextmove(num){
            if(e == -1 && first) {
                first = false
                matrix[1][1]=0
                PutO(5)
            }
            else if(num == 1) {
                let di_a = matrix[0][0]+matrix[1][1]+matrix[2][2]
                let row = matrix[0][0]+matrix[0][1]+matrix[0][2]
                let col = matrix[0][0]+matrix[1][1]+matrix[2][2]
                let max_val = Math.max(di_a, row, col)
                if(di_a == max_val){
                     if(e==-1){
                        e=0
                        matrix[1][1]=0
                        PutO(5)
                     }
                     else if(i==-1){
                        i=0
                        matrix[2][2]=0
                        PutO(9)
                     }
                }
                else if(row == max_val){
                    if(b==-1){
                       b=0
                       matrix[0][1]=0
                       PutO(2)
                    }
                    else if(c==-1){
                       c=0
                       matrix[0][2]=0
                       PutO(3)
                    }
               }
               else if(col == max_val){
                if(d==-1){
                   d=0
                   matrix[1][0]=0
                   PutO(4)
                }
                else if(g==-1){
                   g=0
                   matrix[2][0]=0
                   PutO(7)
                }
           }
               
            }
            else if(num == 3) {
                let di_a = matrix[0][2]+matrix[1][1]+matrix[2][0]
                let row = matrix[0][0]+matrix[0][1]+matrix[0][2]
                let col = matrix[0][2]+matrix[1][2]+matrix[2][2]
                let max_val = Math.max(di_a, row, col)
                if(di_a == max_val){
                     if(e==-1){
                        e=0
                        matrix[1][1]=0
                        PutO(5)
                     }
                     else if(g==-1){
                        g=0
                        matrix[2][0]=0
                        PutO(7)
                     }
                }
                else if(row == max_val){
                    if(a==-1){
                       a=0
                       matrix[0][0]=0
                       PutO(1)
                    }
                    else if(b==-1){
                       b=0
                       matrix[0][1]=0
                       PutO(2)
                    }
                    
               }
               else if(col == max_val){
                if(f==-1){
                   f=0
                   matrix[1][2]=0
                   PutO(6)
                }
                else if(i==-1){
                   i=0
                   matrix[2][2]=0
                   PutO(9)
                }
           }
                
            }
            else if(num == 7) {
                let di_a = matrix[0][2]+matrix[1][1]+matrix[2][0]
                let row = matrix[2][0]+matrix[2][1]+matrix[2][2]
                let col = matrix[0][2]+matrix[1][2]+matrix[2][2]
                let max_val = Math.max(di_a, row, col)
                if(di_a == max_val){
                     if(c==-1){
                        c=0
                        matrix[0][2]=0
                        PutO(3)
                     }
                     else if(e==-1){
                        e=0
                        matrix[1][1]=0
                        PutO(5)
                     }
                     
                }
                else if(row == max_val){
                    if(e==-1){
                       e=0
                       matrix[1][1]=0
                       PutO(5)
                    }
                    else if(c==-1){
                       c=0
                       matrix[0][2]=0
                       PutO(3)
                    }
               }
               else if(col == max_val){
                if(a==-1){
                   a=0
                   matrix[0][0]=0
                   PutO(1)
                }
                else if(d==-1){
                   d=0
                   matrix[1][0]=0
                   PutO(4)
                }
                
           }
             
                
            }
            else if(num == 9) {
                let di_a = matrix[0][0]+matrix[1][1]+matrix[2][2]
                let row = matrix[2][0]+matrix[2][1]+matrix[2][2]
                let col = matrix[0][2]+matrix[1][2]+matrix[2][2]
                let max_val = Math.max(di_a, row, col)
                if(di_a == max_val){
                     if(a==-1){
                        a=0
                        matrix[0][0]=0
                        PutO(1)
                     }
                     else if(e==-1){
                        e=0
                        matrix[1][1]=0
                        PutO(5)
                     }
                }
                else if(row == max_val){
                    if(g==-1){
                       g=0
                       matrix[2][0]=0
                       PutO(7)
                    }
                    else if(h==-1){
                       h=0
                       matrix[2][1]=0
                       PutO(8)
                    }
               }
               else if(col == max_val){
                if(c==-1){
                   c=0
                   matrix[0][2]=0
                   PutO(3)
                }
                else if(f==-1){
                   f=0
                   matrix[1][2]=0
                   PutO(6)
                }
           }
               
                
            }
            else if(num == 2) {
                let row = matrix[0][0]+matrix[0][1]+matrix[0][2]
                let col = matrix[0][1]+matrix[1][1]+matrix[2][1]
                let max_val = Math.max(row, col)
                if(row == max_val){
                    if(a==-1){
                       a=0
                       matrix[0][0]=0
                       PutO(1)
                    }
                    else if(c==-1){
                       c=0
                       matrix[0][2]=0
                       PutO(3)
                    }
               }
               else if(col == max_val){
                if(e==-1){
                   e=0
                   matrix[1][1]=0
                   PutO(5)
                }
                else if(h==-1){
                   h=0
                   matrix[2][1]=0
                   PutO(8)
                }
            }      
            }
            else if(num == 8) {
                let row = matrix[2][0]+matrix[2][1]+matrix[2][2]
                let col = matrix[0][1]+matrix[1][1]+matrix[2][1]
                let max_val = Math.max(row, col)
                if(row == max_val){
                    if(g==-1){
                       g=0
                       matrix[2][0]=0
                       PutO(7)
                    }
                    else if(i==-1){
                       i=0
                       matrix[2][2]=0
                       PutO(9)
                    }
               }
               else if(col == max_val){
                if(e==-1){
                   e=0
                   matrix[1][1]=0
                   PutO(5)
                }
                else if(b==-1){
                   b=0
                   matrix[0][1]=0
                   PutO(2)
                }
            }      
            }
            else if(num == 4) {
                let row = matrix[1][0]+matrix[1][1]+matrix[1][2]
                let col = matrix[0][0]+matrix[1][0]+matrix[2][0]
                let max_val = Math.max(row, col)
                if(row == max_val){
                    if(e==-1){
                       e=0
                       matrix[1][1]=0
                       PutO(5)
                    }
                    else if(f==-1){
                       f=0
                       matrix[1][2]=0
                       PutO(6)
                    }
               }
               else if(col == max_val){
                if(a==-1){
                   a=0
                   matrix[0][0]=0
                   PutO(1)
                }
                else if(g==-1){
                   g=0
                   matrix[2][0]=0
                   PutO(7)
                }
            }      
            }
            else if(num == 6) {
                let row = matrix[1][0]+matrix[1][1]+matrix[1][2]
                let col = matrix[0][2]+matrix[1][2]+matrix[2][2]
                let max_val = Math.max(row, col)
                if(row == max_val){
                    if(e==-1){
                       e=0
                       matrix[1][1]=0
                       PutO(5)
                    }
                    else if(d==-1){
                       d=0
                       matrix[1][0]=0
                       PutO(4)
                    }
               }
               else if(col == max_val){
                if(c==-1){
                    c=0
                   matrix[0][2]=0
                   PutO(3)
                }
                else if(i==-1){
                   i=0
                   matrix[2][2]=0
                   PutO(9)
                }
            }      
            }
            else if(num == 5){
                let di_a = matrix[0][0]+matrix[1][1]+matrix[2][2]
                let di_b = matrix[0][2]+matrix[1][1]+matrix[2][0]
                let row = matrix[1][0]+matrix[1][1]+matrix[1][2]
                let col = matrix[0][1]+matrix[1][1]+matrix[2][1]
                let max_val = Math.max(di_a, di_b, row, col)
                if(di_a == max_val){
                     if(a==-1){
                        a=0
                        matrix[0][0]=0
                        PutO(1)
                     }
                     else if(i==-1){
                        i=0
                        matrix[2][2]=0
                        PutO(9)
                     }
                }
                else if(di_b == max_val){
                    if(c==-1){
                       c=0
                       matrix[0][2]=0
                       PutO(3)
                    }
                    else if(g==-1){
                       g=0
                       matrix[2][0]=0
                       PutO(7)
                    }
               }
                else if(row == max_val){
                    if(d==-1){
                       d=0
                       matrix[1][0]=0
                       PutO(4)
                    }
                    else if(f==-1){
                       f=0
                       matrix[1][2]=0
                       PutO(6)
                    }
               }
               else if(col == max_val){
                if(b==-1){
                   b=0
                   matrix[0][1]=0
                   PutO(2)
                }
                else if(h==-1){
                   h=0
                   matrix[2][1]=0
                   PutO(8)
                }
           }
            }

        }

        // 
        function PutO(num){
            if(num == 1){
                document.getElementById('a1').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 2){
                document.getElementById('a2').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 3){
                document.getElementById('a3').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 4){
                document.getElementById('b1').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 5){
                document.getElementById('b2').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 6){
                document.getElementById('b3').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 7){
                document.getElementById('c1').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 8){
                document.getElementById('c2').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
            else if(num == 9){
                document.getElementById('c3').innerText = 'O'
                if(winner(num, 0)) declare(0)
            }
        }
        //
        function PutX(num){
            if(num === 1 && a===-1){
                document.getElementById('a1').innerText = 'X'
                a=1
                matrix[0][0] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 2 && b===-1){
                document.getElementById('a2').innerText = 'X'
                b=1
                matrix[0][1] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 3 && c===-1){
                document.getElementById('a3').innerText = 'X'
                c=1
                matrix[0][2] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 4 && d===-1){
                document.getElementById('b1').innerText = 'X'
                d=1
                matrix[1][0] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 5 && e===-1){
                document.getElementById('b2').innerText = 'X'
                e=1
                matrix[1][1] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 6 && f===-1){
                document.getElementById('b3').innerText = 'X'
                f=1
                matrix[1][2] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 7 && g===-1){
                document.getElementById('c1').innerText = 'X'
                g=1
                matrix[2][0] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 8 && h===-1){
                document.getElementById('c2').innerText = 'X'
                h=1
                matrix[2][1] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            else if(num === 9 && i===-1){
                document.getElementById('c3').innerText = 'X'
                i=1
                matrix[2][2] = 1
                if(!winner(num, 3)) nextmove(num)
                else declare(1)
            }
            
        }
