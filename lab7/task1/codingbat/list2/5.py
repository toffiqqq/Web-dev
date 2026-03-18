def sum67(nums):
    total = 0
    in_block = False

    for num in nums:
        if num == 6:
            in_block = True
        elif not in_block:
            total += num
        elif num == 7:
            in_block = False

    return total