def string_match(a, b):
  min_l = min(len(a), len(b))
  count = 0
  
  for i in range(min_l -1):
    if a[i:i+2] == b[i:i+2]:
      count += 1
  return count