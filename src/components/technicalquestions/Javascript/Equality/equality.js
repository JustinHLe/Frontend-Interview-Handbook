/*
    What's the difference between == and ===

    triple equal will check the type and the value
    if types are not equal immediately throw false
    if types are equal and values are not equal throw false

    double equal will only check values and will try to do type conversion 
    so both comparators are the same type

    Note for non primitive types such as arrays and objects the equality doesnt compare if the objects and arrays
    have the same values in it, they compare where they're stored in memory which is always going to be different
    
*/