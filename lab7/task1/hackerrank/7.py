def merge_the_tools(string, k):
    for i in range(0, len(string), k):
        part = string[i:i + k]
        result = ""
        
        for char in part:
            if char not in result:
                result = result + char
        
        print(result)


if __name__ == '__main__':
    string = input()
    k = int(input())
    merge_the_tools(string, k)