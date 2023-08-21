package corejava.factorypattern;

public class NotificationService {
    public static void main(String[] args)
    {
        Notification notification = NotificationFactory.createNotification("SMS");
        notification.notifyUser();
    }
}
