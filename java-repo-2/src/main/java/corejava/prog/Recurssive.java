package corejava.prog;


public class Recurssive {
    public static void main(String[] args) {
        int result = sum(10);
        System.out.println(result);
    }
    public static int sum(int k) {
        if (k > 0) {
            if(k==0) System.out.println(k);
            System.out.println("---"+ k);
            return k + sum(k - 1);
        } else {
            System.out.println("#####"+ k);
            return 0;
        }
    }
}

