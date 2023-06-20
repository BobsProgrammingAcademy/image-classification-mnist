import numpy as np
import tensorflow as tf


def load_dataset():
    # load the dataset
    (X_train, y_train), (X_test, y_test) = tf.keras.datasets.mnist.load_data()

    # reshape the dataset to have a single channel
    X_train = np.expand_dims(X_train, axis=3)
    X_test = np.expand_dims(X_test, axis=3)

    # one-hot encode target values
    y_train = tf.keras.utils.to_categorical(y_train, 10)
    y_test = tf.keras.utils.to_categorical(y_test, 10)

    return X_train, y_train, X_test, y_test


def prepare_dataset(train, test):
    # convert from integers to floats
    train_norm = train.astype('float32')
    test_norm = test.astype('float32')

    # normalize to range 0-1
    train_norm = train_norm / 255.0
    test_norm = test_norm / 255.0

    # return normalized images
    return train_norm, test_norm


# define the CNN model
def define_model():
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.Conv2D(
        filters=32,
        kernel_size=(5, 5),
        strides=1,
        activation='relu',
        kernel_regularizer=tf.keras.regularizers.l2(0.0005),
        input_shape=(28, 28, 1),
        name='convolution_1'
    ))
    model.add(tf.keras.layers.Conv2D(
        filters=32,
        kernel_size=(5, 5),
        strides=1,
        activation='relu',
        use_bias=False,
        name='convolution_2'
    ))
    model.add(tf.keras.layers.BatchNormalization(name='batchnorm_1'))
    model.add(tf.keras.layers.Activation('relu'))
    model.add(tf.keras.layers.MaxPooling2D(
        pool_size=(2, 2),
        strides=2,
        name='max_pool_1'
    ))
    model.add(tf.keras.layers.Dropout(0.25, name='dropout_1'))
    model.add(tf.keras.layers.Conv2D(
        filters=64,
        kernel_size=(3, 3),
        strides=1,
        activation='relu',
        kernel_regularizer=tf.keras.regularizers.l2(0.0005),
        name='convolution_3'
    ))
    model.add(tf.keras.layers.Conv2D(
        filters=64,
        kernel_size=(3, 3),
        strides=1,
        activation='relu',
        use_bias=False,
        name='convolution_4'
    ))
    model.add(tf.keras.layers.BatchNormalization(name='batchnorm_2'))
    model.add(tf.keras.layers.Activation('relu'))
    model.add(tf.keras.layers.MaxPooling2D(
        pool_size=(2, 2),
        strides=2,
        name='max_pool_2'
    ))
    model.add(tf.keras.layers.Dropout(0.25, name='dropout_2'))
    model.add(tf.keras.layers.Flatten(name='flatten'))
    model.add(tf.keras.layers.Dense(
        units=256,
        activation='relu',
        use_bias=False,
        name='fully_connected_1'
    ))
    model.add(tf.keras.layers.BatchNormalization(name='batchnorm_3'))
    model.add(tf.keras.layers.Activation('relu'))
    model.add(tf.keras.layers.Dense(
        units=128,
        activation='relu',
        use_bias=False,
        name='fully_connected_2'
    ))
    model.add(tf.keras.layers.BatchNormalization(name='batchnorm_4'))
    model.add(tf.keras.layers.Activation('relu'))
    model.add(tf.keras.layers.Dense(
        units=84,
        activation='relu',
        use_bias=False,
        name='fully_connected_3'
    ))
    model.add(tf.keras.layers.BatchNormalization(name='batchnorm_5'))
    model.add(tf.keras.layers.Activation('relu'))
    model.add(tf.keras.layers.Dropout(0.25, name='dropout_3'))
    model.add(tf.keras.layers.Dense(
        units=10,
        activation='softmax',
        name='output'
    ))

    # compile the model
    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=0.01),
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    model.summary()

    return model


# train, evaluate and save the model
def train_and_save_model(X_train, y_train, X_test, y_test):
    # define the model
    model = define_model()

    # train the model
    model.fit(
        X_train,
        y_train,
        epochs=30,
        batch_size=64,
        validation_split=0.2,
        verbose=1,
        shuffle=True,
        callbacks=[tf.keras.callbacks.ReduceLROnPlateau(
            monitor='val_loss',
            factor=0.2,
            patience=2
        )]
    )

    # evaluate the model on test data
    score = model.evaluate(X_test, y_test, verbose=0)
    print('Error on test data: ', score[0])  # printed: Error on test data:  0.022791262716054916
    print('Accuracy on test data: {0:.2f}%'.format(score[1] * 100))  # printed: Accuracy on test data: 99.45%

    # save the model
    model.save('ml_model/cnn_model.h5')
    print('Saved model to disk')


# run the test harness for evaluating the model
def run_test_harness():
    # load the dataset
    X_train, y_train, X_test, y_test = load_dataset()

    # prepare the dataset
    X_train, X_test = prepare_dataset(X_train, X_test)

    # train, evaluate and save the model
    train_and_save_model(X_train, y_train, X_test, y_test)


# entry point, run the test harness
run_test_harness()
