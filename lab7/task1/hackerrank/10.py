def solve(s):
    words = s.split(" ")
    result = []
    
    for word in words:
        if word:
            new_word = word[0].upper() + word[1:]
            result.append(new_word)
        else:
            result.append(word)
    
    return " ".join(result)


if __name__ == '__main__':
    s = input()
    print(solve(s))