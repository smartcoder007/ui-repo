package corejava.prog;

public class Fact {
    public static void main(String[] args) {
       System.out.println(fact(5));
    }

    static int fact(int n){
        if (n <= 1) // base case
            return 1;
        else
            return n*fact(n-1);
    }
}
