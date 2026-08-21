import UIKit
import Capacitor
import AVFoundation
import MediaPlayer
import GoogleMobileAds

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        // 1. Initialize Google Mobile Ads SDK for iOS
        GADMobileAds.sharedInstance().start(completionHandler: nil)
        
        // 2. Setup 24/7 Native Background Audio Session (Spotify / Apple Music Grade)
        do {
            try AVAudioSession.sharedInstance().setCategory(
                .playback,
                mode: .default,
                options: [.mixWithOthers, .allowAirPlay, .allowBluetooth]
            )
            try AVAudioSession.sharedInstance().setActive(true)
        } catch {
            print("[Souliff iOS] Failed to activate 24/7 Background Audio Session: \(error)")
        }
        
        // 3. Setup Remote Command Center (Lockscreen & AirPods Controls)
        setupRemoteCommandCenter()
        
        return true
    }
    
    private func setupRemoteCommandCenter() {
        let commandCenter = MPRemoteCommandCenter.shared()
        
        commandCenter.playCommand.addTarget { [weak self] event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativePlay"), object: nil)
            return .success
        }
        
        commandCenter.pauseCommand.addTarget { [weak self] event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativePause"), object: nil)
            return .success
        }
        
        commandCenter.togglePlayPauseCommand.addTarget { [weak self] event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativeToggle"), object: nil)
            return .success
        }
    }

    func applicationWillResignActive(_ application: UIApplication) {}
    func applicationDidEnterBackground(_ application: UIApplication) {}
    func applicationWillEnterForeground(_ application: UIApplication) {}
    func applicationDidBecomeActive(_ application: UIApplication) {}
    func applicationWillTerminate(_ application: UIApplication) {}
}
