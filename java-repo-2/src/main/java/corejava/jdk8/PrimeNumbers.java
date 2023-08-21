package corejava.jdk8;

public class PrimeNumbers {

    public static void main(String[] args) {

        int req=Integer.parseInt(args[0]);
        for(int i=1;i<=req;i++){

            if(isPrime(i)) {
                System.out.println(i);
            }
        }

    }

    public static boolean isPrime(int x){
        if(x <=2){
            return true;
        }

        for(int i=2; i< x; i++){
            if(x%i==0){
                return false;

            }
        }
        return true;

    }
}
